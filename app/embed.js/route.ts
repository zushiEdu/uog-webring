import { NextResponse } from "next/server";

function buildScript(baseUrl: string): string {
  const safeBase = JSON.stringify(baseUrl);

  return `(function () {
  const BASE_URL = ${safeBase};
  const scriptTag = document.currentScript || document.querySelector('script[data-webring]');
  if (!scriptTag) return;

  const userId = scriptTag.getAttribute('data-user') || '';
  const mode = scriptTag.getAttribute('data-mode') || 'ring';
  const color = scriptTag.getAttribute('data-color') || 'green';
  const arrowStyle = scriptTag.getAttribute('data-arrow') || 'arrow';
  const customColor = scriptTag.getAttribute('data-custom-color') || '';
  const align = scriptTag.getAttribute('data-align') || 'left';
  const background = scriptTag.getAttribute('data-background') || '';
  const border = scriptTag.getAttribute('data-border') || '';
  const noBackground = scriptTag.hasAttribute('data-no-background');

  const wrap = document.createElement('div');
  wrap.style.display = 'flex';
  wrap.style.width = '100%';
  wrap.style.justifyContent = align === 'center' ? 'center' : align === 'right' ? 'flex-end' : 'flex-start';

  const container = document.createElement('div');
  container.style.display = 'inline-flex';
  container.style.alignItems = 'center';
  container.style.gap = '10px';
  container.style.fontFamily = "'Source Sans 3', -apple-system, sans-serif";
  container.style.padding = noBackground ? '0' : '10px';
  container.style.borderRadius = '12px';
  container.style.background = noBackground ? 'transparent' : (background || '#f4f8f5');
  container.style.border = border ? ('1px solid ' + border) : '1px solid #d7e4dc';

  const apiUrl = BASE_URL + '/api/webring' + (userId ? ('?user=' + encodeURIComponent(userId)) : '');
  const ringUrl = BASE_URL + '/ring';

  const arrowColor = customColor || (color === 'black' ? '#111' : color === 'white' ? '#fff' : '#153f2e');
  const icon = document.createElement('a');
  icon.href = BASE_URL;
  icon.target = '_blank';
  icon.rel = 'noopener noreferrer';
  icon.textContent = 'uoguelph.network';
  icon.style.fontWeight = '700';
  icon.style.fontSize = '14px';
  icon.style.color = arrowColor;

  const left = document.createElement('button');
  const right = document.createElement('button');

  function iconFor(dir) {
    if (arrowStyle === 'chevron') return dir === 'left' ? '‹' : '›';
    if (arrowStyle === 'angle') return dir === 'left' ? '〈' : '〉';
    return dir === 'left' ? '←' : '→';
  }

  [left, right].forEach((btn, i) => {
    btn.textContent = i === 0 ? iconFor('left') : iconFor('right');
    btn.style.border = 'none';
    btn.style.background = 'transparent';
    btn.style.cursor = 'pointer';
    btn.style.fontSize = '20px';
    btn.style.color = arrowColor;
    btn.style.lineHeight = '1';
  });

  function goRing(action) {
    const current = encodeURIComponent(window.location.href);
    window.open(ringUrl + '?site=' + current + '&action=' + action, '_blank', 'noopener');
  }

  fetch(apiUrl)
    .then((r) => r.json())
    .then((data) => {
      const members = Array.isArray(data.members) ? data.members : [];
      let index = members.length > 0 ? Math.floor(Math.random() * members.length) : -1;

      function openConnected(step) {
        if (!members.length) return;
        index = (index + step + members.length) % members.length;
        const target = members[index];
        if (target && target.url) window.open(target.url, '_blank', 'noopener');
      }

      left.onclick = function () {
        if (mode === 'connections') {
          openConnected(-1);
        } else {
          goRing('prev');
        }
      };

      right.onclick = function () {
        if (mode === 'connections') {
          openConnected(1);
        } else {
          goRing('next');
        }
      };

      if (!members.length && mode === 'connections') {
        left.style.opacity = '0.35';
        right.style.opacity = '0.35';
      }
    })
    .catch(function () {
      left.onclick = function () { goRing('prev'); };
      right.onclick = function () { goRing('next'); };
    });

  container.appendChild(left);
  container.appendChild(icon);
  container.appendChild(right);
  wrap.appendChild(container);
  if (scriptTag.parentNode) {
    scriptTag.parentNode.insertBefore(wrap, scriptTag.nextSibling);
  }
})();`;
}

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL ?? "https://uoguelph.network";
  const body = buildScript(baseUrl);

  return new NextResponse(body, {
    headers: {
      "Content-Type": "application/javascript",
      "Cache-Control": "public, max-age=300",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}

export async function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, OPTIONS",
    },
  });
}

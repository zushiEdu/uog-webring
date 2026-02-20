"use client";

export default function AsciiBackground() {
  const asciiArt = `
                               __
                          _.-"  "-._
                       .-"  .--.    "-.
                     .'   .'_  _'.      '.
                    /   _/  \\/  \\_       \\
                   ;   /  /\\  /\\  \\       ;
                   |  |  /__\\/__\\  |      |
                   |  |   _  /\\  _ |      |
                   ;   \\_/ \\_\\/_/ \\_/     ;
                    \\        /\\          /
                     '.     /  \\      .'
                       '-._/____\\_.-'
                           / || \\
                     _____/  ||  \\_____
                    /  _______________  \\
                   /  /  [BOOK] [ORB] \\  \\
                  /  /-----------------\\  \\
                  \\  \\  [GRYPHON      ]/  /
                   \\  \\  [ HEAD + WING]/  /
                    \\  \\______________/  /
                     \\__________________/
                          \\\\      //
                           \\\\____//
                            \\____/
                        UNIVERSITY OF GUELPH
  `;

  return (
    <div className="ascii-art-background" aria-hidden="true">
      <pre>{asciiArt}</pre>
    </div>
  );
}

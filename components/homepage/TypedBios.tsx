import React from 'react';
import Typed from 'typed.js';

import Twemoji from '@/components/ui/Twemoji';

const TypedBios = () => {
  const el = React.useRef(null);
  const typed = React.useRef<Typed | null>(null);

  React.useEffect(() => {
    typed.current = new Typed(el.current, {
      stringsElement: '#bios',
      typeSpeed: 40,
      backSpeed: 10,
      loop: true,
      backDelay: 1000,
    });

    return () => typed.current?.destroy();
  }, []);

  return (
    <div>
      <ul id="bios" className="hidden">
        <li>
          I need a coffee that <b className="font-medium">recylces</b> into <b className="font-medium">code</b>.
        </li>
        <li>I love web development and software engineering.</li>
        <li>
          I work mostly with <b className="font-medium">Python/Java/JavaScript</b> technologies.
        </li>
        <li>
          I like cats! <Twemoji emoji="cat" />.
        </li>
        <li>
          I love playing video games <Twemoji emoji="video-game" />.
        </li>
        <li>
          I enjoy listening to music, especially <Twemoji emoji="musical-keyboard" /> country and rock.
        </li>
      </ul>

      <span ref={el} className="text-neutral-900 dark:text-neutral-200" />
    </div>
  );
};

export default TypedBios;

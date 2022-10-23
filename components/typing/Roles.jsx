import React from 'react';
import { TypePhase, useTypedSuperpower } from './useTypedRoles';
import cn from 'classnames';

const Roles = ({ superpowers }) => {
  const { typedSuperpower, selectedSuperpower, phase, resume } =
    useTypedSuperpower(superpowers);

  return (
    <h2
      className="flex flex-col lg:block text-center text-5xl tracking-tight text-gray-900 md:text-6xl"
      onClick={resume}
    >
      <span
        className={cn('text-[#b15b5b] pb-10 min-h-[10rem]', {
          ['end-cursor']: phase !== TypePhase.Deleting,
          ['blinking']: phase === TypePhase.Pausing,
        })}
        aria-label={selectedSuperpower}
      >
        I&apos;m a {typedSuperpower}
      </span>
    </h2>
  );
}

export default Roles;
import type { Request } from 'express';
import { env } from '../env';

export const acceptedLanguages = env.ACCEPTED_LANGUAGES.split(',').map((l) =>
  l.trim(),
);

export const getLanguage = (request: Request): string => {
  const { params, cookies } = request;

  return (
    (acceptedLanguages.includes(params.lang) && params.lang) ||
    (acceptedLanguages.includes(cookies.lang) && cookies.lang) ||
    request.acceptsLanguages(acceptedLanguages) ||
    env.DEFAULT_LANGUAGE
  );
};

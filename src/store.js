import { writable } from 'svelte/store';

export const books = writable([]);
export const loading = writable(false);
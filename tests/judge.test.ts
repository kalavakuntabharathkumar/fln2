import {describe,it,expect} from 'vitest';import {judge} from '../app/judge.js';
describe('judge',()=>{it('exact',async()=>expect((await judge('A','A')).score).toBe(1));it('mismatch',async()=>expect((await judge('A','B')).score).toBe(0))});

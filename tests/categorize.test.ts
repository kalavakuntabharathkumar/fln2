import {describe,it,expect} from 'vitest';import {categorize} from '../app/categorize.js';
describe('categorize',()=>{it('hallucination',()=>expect(categorize('hallucinated citation')).toBe('hallucination'));it('format',()=>expect(categorize('invalid JSON format')).toBe('format_error'));it('other',()=>expect(categorize('unknown issue')).toBe('other'))});

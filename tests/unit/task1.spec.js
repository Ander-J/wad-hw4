import { mount } from '@vue/test-utils'
import List from "../../src/components/List";

describe('Task1', () => {
    const list = mount(List);

    it('Check if list is empty', () => {
        expect(Array.isArray(list) && list.length).toBe(false)
    })
});
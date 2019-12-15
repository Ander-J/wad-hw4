import { mount } from '@vue/test-utils'
import List from "../../src/components/List";

describe('Task1', () => {
    const wrapper = mount(List);

    it('Check if list is empty', () => {
        expect(wrapper.html()).toContain("Add your first Todo task")
    })
});
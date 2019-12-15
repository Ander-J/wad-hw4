import { mount } from '@vue/test-utils'
import List from "../../src/components/List";

describe('List', () => {
    const wrapper = mount(List);

    it('Task 1, check if text is displayed properly', () => {
        expect(wrapper.html()).toContain("Add your first Todo task")
    })
});
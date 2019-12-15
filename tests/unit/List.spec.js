import {mount} from '@vue/test-utils';
import List from "../../src/components/List";


describe('4th test', () => {
    let testitemList = [
        {
            id: 1,
            title: "item1",
            done: false,
        },
        {
        id: 2,
            title: "item2",
            done: false,
        },
        {
            id: 3,
            title: "item3",
            done: false,
        }
    ]

    const wrapper = mount(List, {
        propsData: {
            list: testitemList
        }
    });
        it("tests that item is updated correctly", () => {

            //correct number of done items
            const items = wrapper.findAll('.done');
            const doneItems = testitemList.filter(item => item.done);
            expect(items.length ).toEqual(doneItems.length);

            //items value is changed correctly
            wrapper.find("span").trigger('click');
            let value = wrapper.props().list[0].done
            expect(value).toBe(true);

        });
    })

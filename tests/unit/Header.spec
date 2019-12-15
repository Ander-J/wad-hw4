import {mount} from '@vue/test-utils';
import Header from "../../src/components/Header.vue";

describe('Header component', () => {

    const wrapper = mount(Header)
    let today = new Date();

    it('Header component displays correct date', () => {
        let date = today.getDate() < 10 ? `0${today.getDate()}` : today.getDate();
        expect(wrapper.html()).toContain(date)
    })

    

    it("Header component displays correct month", () =>{
        const months = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"];
        let month = today.getMonth();
        expect(wrapper.html()).toContain(months[month].toUpperCase().slice(0,3))
    })

    it('Header component displays correct year', () => {
        let year = today.getFullYear();
        expect(wrapper.html()).toContain(year)
    })


    it("Header component displays correct week day", () =>{
        let date = new Date();
        let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        let day = days[date.getDay()];
        expect(wrapper.html()).toContain(day.toUpperCase())
    })

});
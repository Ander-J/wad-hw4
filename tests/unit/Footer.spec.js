  
import { mount } from "@vue/test-utils";

import Footer from "../../src/components/Footer.vue";

describe("Footer ", () => {
  const wrapper = mount(Footer);
  
  it("When '+' button is clicked in Footer, 'open' property in Footer component changes to true", () => {
    wrapper.find("span").trigger("click");
    let opened = wrapper.vm.$data.open;
    expect(opened).toBe(true);
  });
});
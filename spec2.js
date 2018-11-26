describe('angularjs.org tests', function () {
    it('should click menu btn', function () {
        var dropdown = element.all(by.css('.dropdown')).get(0);
        var dropdownToggle = dropdown.element(by.css('.dropdown-toggle'));
        var dropdownMenu = dropdown.element(by.css('.dropdown-menu'));
        var menuItem = dropdownMenu.all(by.tagName('li')).first();

        browser.get('http://www.angularjs.org');
        dropdownToggle.click();
        menuItem.click();

        expect(browser.getCurrentUrl()).toEqual('https://docs.angularjs.org/tutorial');
    });

    it('should click tutorial "Bootstrapping" link', function () {
        // browser.sleep(2000);
        browser.waitForAngular();
        element.all(by.css('.nav-index-listing>a')).get(0).click();

        expect(element(by.cssContainingText('.pln', 'npm install')).isEnabled()).toBe(true);
    })

    it('should return to homepage', function () {
        var checkbox = element.all(by.model("todo.done")).get(1);

        // browser.get('http://www.angularjs.org');
        browser.navigate().back();
        browser.navigate().back();
        checkbox.click();

        expect(checkbox.isSelected()).toBe(true);
    });
});
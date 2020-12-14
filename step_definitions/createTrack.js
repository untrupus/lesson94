const {I} = inject();

Given(/^я нахожусь на странице "(.*?)"$/, (path) => {
    I.amOnPage(path);
});

When('я нажимаю на ссылку {string}', (button) => {
    I.click({id: button})
});

Then(/^я попадаю на страницу "(.*?)"$/, (path) => {
    I.amOnPage(path);
});

When('я ввожу {string} в поле {string}', (value, fieldName) => {
    I.fillField({id: fieldName}, value);
});

When('нажимаю на кнопку {string}', (button) => {
    I.click({id: button})
});

Then(/^попадаю на страницу "(.*?)"$/, (path) => {
    I.seeInCurrentUrl(path);
});

When('я нажимаю на сссылку {string}', (link) => {
    I.click({id: link})
});

Then(/^попадаю на страницу "(.*?)"$/, (path) => {
    I.amOnPage(path);
});

When('я ввожу {string} в поле {string}', (value, fieldName) => {
    I.fillField({id: fieldName}, value);
});

When('я нажимаю кнопку {string}', (button) => {
    I.click({id: button})
});

Then(/^попадаю на страницу "(.*?)"$/, (path) => {
    I.amOnPage(path);
});
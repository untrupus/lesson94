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


When(/^я выбираю файл "(.*?)" в поле "(.*?)"$/, (path, fieldId) => {
    I.attachFile(`form input[id=${fieldId}]`, path);
});

When("я нажимаю на селект {string}", (fieldName) => {
    I.click({id: fieldName});
});

When("я нажимаю на текст {string}", (fieldName) => {
    I.click({name: fieldName});
});

When('я нажимаю кнопку {string}', (button) => {
    I.click({id: button})
});

Then(/^попадаю на страницу "(.*?)"$/, (path) => {
    I.amOnPage(path);
});
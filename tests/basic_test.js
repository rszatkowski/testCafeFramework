import { Selector } from 'testcafe'

fixture `Getting started with testCafe`
    .page `https://devexpress.github.io/testcafe/example/`
    .before(async t => {
        //asd
    })
    .beforeEach(async t => {
        //Runs before each
    })
test('My first testCafe test', async t => {
    await t.typeText('#developer-name','This is some text')
    await t.click('#submit-button')

    await t.expect(Selector('#article-header').innerText).contains('Thank')
} )
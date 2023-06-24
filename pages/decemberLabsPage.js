const { NAME, EMAIL, LINKEDINPROFILE, COMMENTS } = require('../data/userData');
const { RED_BORDER_COLOR, NO_BORDER_COLOR } = require('../data/colorConstants');


module.exports = {
    url: 'https://inhouse.decemberlabs.com/careers/',

    elements: {
        joinOurTeamLink: 'a[data-subject="Join Our Team"]',
        joinUsModal: 'div.dl-modal.dl-joinus-modal.big.open',
        popupTitle: 'body > main > section.row.content_what_we_offer > div > div > div.start-project-form.content_form > h3',
        submitButton: 'button[id="wpforms-submit-870"]',
        nameField: 'input[id="wpforms-870-field_0"]',
        emailField: 'input[id="wpforms-870-field_1"]',
        linkedinField: 'input[id="wpforms-870-field_20"]',
        commentsField: 'textarea[id="wpforms-870-field_2"]'
    },

    commands: [{

        // Verifica que la página se haya cargado esperando a que el body esté visible
        verifyPageLoaded() {
            return this.waitForElementVisible('body');
        },

        // Esta función toma un localizador y hace click en el elemento correspondiente
        clickElement(locator) {
            return this
                .waitForElementVisible(locator, 1000)
                .click(locator)
        },

        // Verifica que el popup de "Join Us" está visible
        verifyPopupVisible() {
            return this
                .waitForElementVisible('@joinUsModal', 1000)
        },

        // Verifica que el título del popup sea igual al texto esperado
        verifyTitleVisibility(expectedText) {
            return this
                .waitForElementVisible('@popupTitle', 1000)
                .getText('@popupTitle', result => {
                    this.assert.equal(result.value, expectedText, `Expected title to be ${expectedText}, but it was ${result.value}`);
                });
        },

        // Verifica que el color del borde de un campo es igual al color esperado
        verifyBorderColor(locator, expectedColor) {
            return this
                .assert.cssProperty(locator, 'border', expectedColor);
        },

        // Verifica el color del borde de todos los campos del formulario
        verifyFieldColor(expectedColor) {
            return this
                .verifyBorderColor('@nameField', expectedColor)
                .verifyBorderColor('@emailField', expectedColor)
                .verifyBorderColor('@linkedinField', expectedColor)
                .verifyBorderColor('@commentsField', expectedColor)
        },

        // Ingresa valores en los campos del formulario. Los valores son pasados como un objeto
        setInputFieldValues(fieldValues) {
            for (let field in fieldValues) {
                this.setValue(this.elements[field].selector, fieldValues[field]);
            }
            return this;
        },

        // Navega a la página de carreras y hace click en el enlace "Join Our Team"
        goToJoinOurTeamForm() {
            return this
                .navigate()
                .verifyPageLoaded()
                .clickElement('@joinOurTeamLink')
        },

        // Realiza una serie de verificaciones en el formulario y llena los campos
        verifyForm() {
            return this
                .verifyPopupVisible()
                .verifyTitleVisibility('Join Our Team')
                .clickElement('@submitButton')
                .verifyFieldColor(RED_BORDER_COLOR)
                .setInputFieldValues({
                    nameField: NAME,
                    emailField: EMAIL,
                    linkedinField: LINKEDINPROFILE,
                    commentsField: COMMENTS
                })
                .verifyFieldColor(NO_BORDER_COLOR);
        }
    }]
};

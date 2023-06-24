module.exports = {
  'Project DECEMBER LABS PAGE': function (browser) {
    const decemberLabsPage = browser.page.decemberLabsPage();

    decemberLabsPage
      .goToJoinOurTeamForm()
      .verifyForm()
    browser.end();
  }
};

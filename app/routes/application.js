import Ember from 'ember';
import ResetScrollMixin from 'ember-cli-reset-scroll';

export default Ember.Route.extend(ResetScrollMixin, {

  // Scroll to a specific position based on the route name (in px)
  resetScroll: 10,
  
  model() {

    return Ember.RSVP.hash({
      navigation: [{
          ico: "home",
          localization: "navigation.welcome",
          link: "index",
          active: true
        },
        {
          ico: "group",
          localization: "navigation.association",
          link: "association",
          active: false
        },
        {
          ico: "group",
          localization: "navigation.fireequipment",
          link: "fireequipment",
          active: false
        },
        {
          ico: "group",
          localization: "navigation.members",
          link: "members",
          active: false
        },
        {
          ico: "group",
          localization: "navigation.operation",
          link: "operation",
          active: false
        },
        {
          ico: "group",
          localization: "navigation.publicrelation",
          link: "publicrelation",
          active: false
        },
        {
          ico: "group",
          localization: "application.brand.city",
          link: "index",
          active: false
        }
      ],
      footerNavigation: [
        {
          ico: "",
          localization: "footer.imprint",
          link: "imprint",
          active: false
        },
        {
          ico: "",
          localization: "footer.dataprotection",
          link: "dataprotection",
          active: false
        },
        {
          ico: "",
          localization: "footer.disclaimer",
          link: "disclaimer",
          active: false
        }
      ],
      copyrightTo: new Date().getFullYear()
    });

  },

  actions: {

    linkTo(route) {
      this.transitionTo(route);
    }

  }

});

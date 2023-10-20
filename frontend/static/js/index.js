import dashboard from "./views/dashboard.js";
import createTeamMember from "./views/createTeamMember.js";
import createRecord from "./views/createRecord.js";

const navigateTo = url => {
    history.pushState(null, null, url);
    router();
};

const router = async () => {
    const routes = [
        { path: "/", view: dashboard },
        { path: "/createTeamMember", view: createTeamMember },
        { path: "/createRecord", view: createRecord }
    ]

    // Test each route for potential match
    const potentialMatches = routes.map(route => {
        return {
            route: route,
            isMatch: location.pathname === route.path
        };
    });

    let match = potentialMatches.find(potentialMatche => potentialMatche.isMatch);

    if (!match) {
        match = {
            route: routes[0],
            isMatch: true
        };

    }

    const view = new match.route.view();

    document.querySelector('#app').innerHTML = await view.getHtml();

    console.log(view);
};

window.addEventListener("popstate", router);

document.addEventListener("DOMContentLoaded", () => {
    document.body.addEventListener("click", e => {
        if (e.target.matches("[data-link]")) {
            e.preventDefault();
            navigateTo(e.target.href);
        }
    })
    router();
});
import './app.component.scss';

export const AppComponent = {
    template: `
        <header>
            Hello world
        </header>
        <div>
            <div ui-view></div>
        </div>
        <footer>
            Copyright MyApp 2016.
        </footer>
    `
    ,
    controller: function () {
        // console.log('App Ctrl', this);
    }
};
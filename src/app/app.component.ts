import { Component } from '@angular/core';

@Component({
    selector: 'meu-app',
    template: `
      <div>
        <nav className="indigo darken-4" role="navigation">
            <div className="nav-wrapper container">
              <a id="logo-container" href="#" className="brand-logo">Angular Taskboard</a>
            </div>
        </nav>

        <div class="container">
          <lista-estoria></lista-estoria>
        </div>

        <footer className="page-footer orange">
          <div className="container">
            <div className="row">
              <div className="col l6 s12">
                Introdução ao Angular
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container">
            Feito com <a className="orange-text text-lighten-3" href="http://materializecss.com">Materialize</a>
            </div>
          </div>
        </footer>

			</div>`,
})
export class AppComponent {
  titulo: string = "TaskBoard";
}
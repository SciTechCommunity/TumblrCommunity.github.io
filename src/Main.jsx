import m from 'mithril';
import Home from './components/Home/View';

const target = document.documentElement;

const layout = component => ({
  render: () => m({
    view: vnode => [
      <head>
        <link rel="stylesheet" href="dist/lib/semantic/semantic.min.css" />
      </head>
      ,
      <body>
        <div className="ui menu"></div>
        {vnode.children}
      </body>
    ]
  }, m(component))
})

m.route(target, '/', {
  '/': layout(Home)
});
export default ({ body, title, initialState }) => `
    <!DOCTYPE html>
    <html>
      <head>
        <title>${title}</title>
        <script>window.APP_INITIAL_STATE = ${initialState}</script>
      </head>

      <body>
        <div id="root">${body}</div>
      </body>

      <script src="/static/bundle.js"></script>
    </html>
  `;

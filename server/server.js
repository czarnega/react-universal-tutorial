import express from 'express'  
import { match } from 'react-router'  
import routes from '../common/routes'

app.get('*', (req, res, next) => {  
  match({ routes: routes(), location: req.url }, (err, redirectLocation, renderProps) => {
    /* ... */
  })
})

const server = app.listen(port, () => console.log('Server started', server.address()))  

import { AppController } from '../controllers/index.controller'
import { Route } from '../../common/models/route.model'

class AppRoute extends Route {
  constructor() {
    super('/')
  }

  mountRoutes() {
    super.mountRoutes()
    this.router.get('/', AppController.root)
  }
}

export default new AppRoute()

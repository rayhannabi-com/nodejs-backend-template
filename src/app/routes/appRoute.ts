import { Route } from '../../common/models'
import { AppController } from '../controllers/appController'

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

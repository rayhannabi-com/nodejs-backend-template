import { ApiController } from '../controllers/apiController'
import { Route } from '../../../common/models'

class ApiRoute extends Route {
  constructor() {
    super('/api/v1')
  }

  mountRoutes() {
    super.mountRoutes()
    this.router.get('/', ApiController.getRoot)
  }

  routesToMount() {
    return []
  }
}

export default new ApiRoute()

import { ApiController } from '../../../api/v1/controllers/index.controller'
import { Route } from '../../../common/models/route.model'

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

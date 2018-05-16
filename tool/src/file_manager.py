from os.path import exists, dirname, join
from os import mkdir


class FileManager:

    def __init__(self, folder):
        self.parent_folder = folder
        self.folders = {
            'backend': {
                'controller': [
                    'srcgen/backend/controllers'
                ],
                'models': [
                    'srcgen/backend/models'
                ],
                'routers': [
                    'srcgen/backend/routers'
                ]
            },
            'frontend': {
                'root': [

                ],
                'controller': [

                ],
                'models': [
                    'srcgen/frontend/models'
                ],
                'services': [
                    'srcgen/frontend/services'
                ],
                'routing': [
                    'srcgen/frontend/routing'
                ],
                'navegacion': [
                    'srcgen/frontend/navegacion'
                ]
            },
            'others': {
                'misc': {
                    'srcgen',
                    'srcgen/backend',
                    'srcgen/frontend'
                }
            }
        }

        self.templates = {
            'backend': {
                'controller': [
                    'templates/backend/controller.template'
                ],
                'models': [
                    'templates/backend/model.template'
                ],
                'router': [
                    'templates/backend/router.template'
                ]
            },
            'frontend': {
                'views': [
                    'templates/frontend/entity/view/entity-view.component.ts.template',
                    'templates/frontend/entity/new/entity-new.component.ts.template',
                    'templates/frontend/entity/edit/entity-edit.component.ts.template'
                ],
                'models': [
                    'templates/frontend/models/entity.ts.template'
                ],
                'services': [
                    'templates/frontend/services/entity.service.ts.template'
                ],
                'routing': [
                    'templates/frontend/routing/routing.module.ts.template'
                ],
                'navegacion': [
                    'templates/frontend/layout/navegacion.component.html.template'
                ],
                'modules': [
                    'templates/frontend/modules/app.module.ts.template'
                ]


            },
            'others': {
                'misc': {
                    'srcgen',
                    'srcgen/backend',
                    'srcgen/frontend'
                }
            }
        }

    def create_folder_structure(self, service_type):
        for kind in self.folders[service_type]:
            for service in self.folders[service_type][kind]:
                service_folder = join(self.parent_folder, service)
                if not exists(service_folder):
                    mkdir(service_folder)

    def write(self, folder, rendered_template):
        pass


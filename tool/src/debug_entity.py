from entity_test import get_entity_mm
from os.path import dirname, join
import sys

this_folder = dirname(__file__)

if __name__ == "__main__":
    entity = None
    if len(sys.argv) > 1:
        entity = sys.argv[1]
        entity_mm = get_entity_mm()
        try:
            entity_model = entity_mm.model_from_file(join(this_folder, "entities/{}.ent".format(entity)))
            for entity in entity_model.entities:
                for property in entity.properties:

                    if property.size_constraint != None:
                        print property
                        print property.size_constraint.value

                    if property.empty_constraint != None:
                        print property
                        print property.empty_constraint.value

                    if property.relation_type != None:
                        print property.relation_type.value


        except Exception as e:
            print "Existe un error en el archivo del modelo, por favor verifique el archivo y genere el modelo nuevamente"
            print "Los detalles del error: "
            print  e
            sys.exit(1)
    else:
        print "Debe ingresar el nombre de la entidad con la cual quiere generar el codigo"
        exit(1)

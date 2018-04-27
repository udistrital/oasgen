package models

import (
  "api/db"
	"gopkg.in/mgo.v2/bson"
	"gopkg.in/mgo.v2"
	"fmt"
)

const PersonaCollection = "persona"

type Persona struct {
	Id bson.ObjectId `json:"_id" bson:"_id,omitempty"`
  Nombre string `json:"nombre"`
}


func UpdatePersona(session *mgo.Session, j Persona, id string) error{
	c := db.Cursor(session,PersonaCollection)
	defer session.Close()
	// Update
	err := c.Update(bson.M{"_id": bson.ObjectIdHex(id)}, &j)
	if err != nil {
		panic(err)
	}
	return err

}


func InsertPersona(session *mgo.Session, j Persona) {
	c := db.Cursor(session,PersonaCollection)
	defer session.Close()
	c.Insert(j)

}

func GetAllPersonas(session *mgo.Session) []Persona {
	c := db.Cursor(session,PersonaCollection)
	defer session.Close()
    fmt.Println("Getting all personas")
	var personas []Persona
	err := c.Find(bson.M{}).All(&personas)
	if err != nil {
		fmt.Println(err)
	}
	return personas
}

func GetPersonaById(session *mgo.Session,id string) ([]Persona,error) {
	c := db.Cursor(session, PersonaCollection)
	defer session.Close()
	var personas []Persona
	err := c.Find(bson.M{"_id": bson.ObjectIdHex(id)}).All(&personas)
	return personas,err
}

func DeletePersonaById(session *mgo.Session,id string) (string,error) {
	c:= db.Cursor(session, PersonaCollection)
	defer session.Close()
	err := c.RemoveId(bson.ObjectIdHex(id))
	return "ok",err
}
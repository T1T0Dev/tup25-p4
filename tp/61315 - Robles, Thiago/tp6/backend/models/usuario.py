from typing import Optional
from sqlmodel import Field, SQLModel

# Pydantic nos permite usar AliasChoices para aceptar múltiples nombres de campo, BaseModel para modelos de entrada y validación, Field para definir campos con alias
from pydantic import BaseModel, Field as PydanticField, AliasChoices

class Usuario(SQLModel, table=True):
    __tablename__ = "usuarios"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    nombre: str = Field(default="", max_length=255)
    email: str = Field(index=True, default="", max_length=255)
    contraseña: str = Field(default="", max_length=255)


class UsuarioRegistroIn(BaseModel):
    nombre: str
    email: str
    # Acepta tanto "password" como "contraseña" desde el cuerpo JSON
    contraseña: str = PydanticField(
        ..., validation_alias=AliasChoices("password", "contraseña")
    )


class UsuarioLoginIn(BaseModel):
    email: str
    # Acepta tanto "password" como "contraseña" desde el cuerpo JSON
    contraseña: str = PydanticField(
        ..., validation_alias=AliasChoices("password", "contraseña")
    )
from typing import Optional
from sqlmodel import Field, SQLModel
from pydantic import BaseModel

class Carrito(SQLModel, table=True):
    __tablename__ = "carritos"
    
    id: Optional[int] = Field(default=None, primary_key=True)
    usuario_id: Optional[int] = Field(default=None, foreign_key="usuarios.id")
    estado: str = Field(default="activo", max_length=50)
    
class CarritoItem(SQLModel, table=True):
    __tablename__ = "carrito_items"
    id: Optional[int] = Field(default=None, primary_key=True)
    carrito_id: Optional[int] = Field(default=None, foreign_key="carritos.id")
    producto_id: Optional[int] = Field(default=None, foreign_key="productos.id")
    cantidad: int = Field(default=1, ge=1)


class AgregarCarritoIn(BaseModel):
    producto_id: int
    cantidad: int = 1
    

class FinalizarCompraIn(BaseModel):
    direccion: str
    tarjeta: str
    
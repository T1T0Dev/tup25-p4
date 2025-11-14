export interface Usuario {
  id?: number;
  nombre: string;
  email: string;
  contraseña?: string;
}

export interface LoginInput {
  email?: string;
  nombre?: string;
  password?: string;
  contraseña?: string; // alias opcional
}

export interface Producto {
  id?: number;
  nombre: string;
  descripcion: string;
  precio: number;
  categoria: string;
  existencia: number;
  imagen?: string;
  activo?: boolean;
}


export interface ProductoCardProps {
  producto: Producto;
}

export interface CarritoItem {
  id?: number;
  carrito_id: number;
  producto_id: number;
  cantidad: number;
  producto?: Producto;
}


export interface CarritoProducto {
  producto_id: number;
  nombre: string;
  precio: number;
  cantidad: number;
  subtotal: number;
  imagen?: string;
  existencia?: number;
  categoria?: string;
}

export interface Carrito {
  id: number;
  usuario_id: number;
  estado: "activo" | "finalizado" | "cancelado";
  productos?: {
    producto_id: number;
    nombre: string;
    precio: number;
    cantidad: number;
    subtotal: number;
    imagen?: string;
    existencia?: number;
    categoria?: string;
  }[];
  total?: number;
  // Totales detallados devueltos por backend (opcional)
  subtotal?: number;
  iva?: number;
  envio?: number;
}



export interface ItemResumen {
  nombre: string;
  precio: number;
  cantidad: number;
  categoria?: string;
}



// ----- DTOs (formas que devuelve el backend) -----
export interface ProductoDTO {
  id?: number;
  titulo?: string;
  nombre?: string;
  precio?: number;
  existencia?: number;
  imagen?: string;
  categoria?: string;
  activo?: boolean;
}

export interface CarritoItemDTO {
  producto_id?: number;
  cantidad?: number;
  subtotal?: number;
  producto?: ProductoDTO;
  nombre?: string;
  precio?: number;
  existencia?: number;
  imagen?: string;
  categoria?: string;
}

export interface CarritoDTO {
  id: number;
  usuario_id: number;
  estado: "activo" | "finalizado" | "cancelado";
  items?: CarritoItemDTO[];
  subtotal?: number;
  iva?: number;
  envio?: number;
  total?: number;
}



export interface CompraItem {
  id?: number;
  compra_id: number;
  producto_id: number;
  nombre: string;
  cantidad: number;
  precio_unitario: number;
}

export interface Compra {
  id: number;
  usuario_id: number;
  fecha: string;
  direccion: string;
  tarjeta: string;
  total: number;
  envio: string;
  items?: CompraItem[];
}


export interface DatosEnvioProps {
  onConfirmar: (payload: { direccion: string; tarjeta: string }) => Promise<void>;
  loading: boolean;
};

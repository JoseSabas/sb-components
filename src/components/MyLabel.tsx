import './myLabel.css';

export interface MyLabelProps {
  /**
   * Mensaje de etiqueta
  */
  label: string;
  /**
   * Tamaño de etiqueta
  */
  size: 'normal'|'h1'|'h2'|'h3';
  /**
   * Todo capitalizado
  */
  allCaps?: boolean;
  /**
   * Colores del botón
  */
  color?: 'primary'|'secondary'|'tertiary';
  /**
   * Color de texto
  */
  miTextCol?: string;
}

export const MyLabel = ({label='Hola', size='normal', allCaps=false, color='primary', miTextCol}:MyLabelProps) => {
  return (
    <span className={`${size} text-${color}`} style={{color:miTextCol}}>
      {allCaps ? label.toUpperCase() : label}
    </span>
  )
}
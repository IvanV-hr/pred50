const StavkaGrad = ({naziv, odabran, onOdaberi}) => {
  return (
    <li>
        <button style={{fontWeight: odabran ? "bold" : "normal"}} onClick={()=> onOdaberi(naziv)}>
            {naziv}
        </button>
    </li>
  )
}

export default StavkaGrad

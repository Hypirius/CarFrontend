import Input from "@/components/Input"
import { useState } from "react"

function PriceSlider() {
  const [price, setPrice] = useState<number>(0)
  return (
    <div id="price-slider-container">
      <Input
        value={price}
        updateStateFn={setPrice}
        type="range"
        id="price-slider"
        min={0}
        max={300000}
      />
      {/* TODO: add limit to sanitize input less than 300k */}
      <Input value={price} updateStateFn={setPrice} />
    </div>
  )
}

export default PriceSlider

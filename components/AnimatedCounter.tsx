'use client'

import CountUp from "react-countup"

const AnimatedCounter = ({ amount }: AnimatedCounterProps) => {
    return (
        <div className="w-full">
            <CountUp
                decimals={2}
                decimal=","
                prefix="$"
                end={amount}
            />
        </div>
    )
}

export default AnimatedCounter
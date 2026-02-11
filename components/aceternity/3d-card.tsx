'use client'

import React, { useState, useRef, ReactNode } from 'react'
import { motion } from 'framer-motion'

interface CardContainerProps {
  children: ReactNode
  className?: string
}

interface CardBodyProps {
  children: ReactNode
  className?: string
}

interface CardItemProps {
  as?: React.ElementType
  children: ReactNode
  className?: string
  translateZ?: number
}

export function CardContainer({ children, className = '' }: CardContainerProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [rotateX, setRotateX] = useState(0)
  const [rotateY, setRotateY] = useState(0)

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top

    const centerX = rect.width / 2
    const centerY = rect.height / 2

    const rotateXValue = ((y - centerY) / centerY) * 5
    const rotateYValue = ((centerX - x) / centerX) * 5

    setRotateX(rotateXValue)
    setRotateY(rotateYValue)
  }

  const onMouseLeave = () => {
    setRotateX(0)
    setRotateY(0)
  }

  return (
    <div
      ref={containerRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      className={`perspective ${className}`}
      style={{
        perspective: '1000px',
      }}
    >
      <motion.div
        animate={{
          rotateX,
          rotateY,
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 60,
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {children}
      </motion.div>
    </div>
  )
}

export function CardBody({ children, className = '' }: CardBodyProps) {
  return (
    <div
      className={`relative w-full ${className}`}
      style={{
        transformStyle: 'preserve-3d',
      }}
    >
      {children}
    </div>
  )
}

export function CardItem({ as: Component = 'div', children, className = '', translateZ = 0 }: CardItemProps) {
  return (
    <motion.div
      as={Component as any}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        transform: `translateZ(${translateZ}px)`,
      }}
    >
      {children}
    </motion.div>
  )
}

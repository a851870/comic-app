const getSize = (size: any , HorW: 'height' | 'width'): any => {
  const sizeObj = {}
  if(typeof size === 'number' && size as number > 0) {
    sizeObj[HorW] = size as number
    return { ...sizeObj }
  } else if(typeof size === 'string') {
    sizeObj[HorW] = size as string+'%'
    return { ...sizeObj }
  }
  return {}
}

export { getSize }

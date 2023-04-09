import React from 'react'
import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  let color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'orange';
  return (
    <Badge
      colorScheme={color}
      fontSize='1rem'
      paddingX={2}
      borderRadius='4px'
    >
      {score}
    </Badge>
  )
}

export default CriticScore
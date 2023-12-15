import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack } from '@chakra-ui/react'

export const Skeliton = () => {
  return (
    <div style={{ width: '80%', margin: 'auto', border: '2px solid gray', borderCollapse: 'collapse', marginTop:"20px" }}>
        <div style={{ width: '80%', margin: 'auto', border: '2px solid gray', borderCollapse: 'collapse', marginTop:"20px", padding:'6', boxShadow:'lg' ,bg:'white' }}>
        <Stack w={"100%"}>
  <Skeleton height='30px' width="70%"/>
  <Skeleton height='30px' width="70%"/>
  <Skeleton height='30px' width="70%"/>
  <Skeleton height='30px' width="70%"/>
  <Skeleton height='30px' width="70%"/>
  <Skeleton height='30px' width="70%"/>
  <Skeleton height='30px' width="70%"/>
</Stack>
        </div>
    </div>
  )
}

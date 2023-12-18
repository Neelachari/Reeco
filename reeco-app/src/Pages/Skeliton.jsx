import React from 'react'
import { Skeleton, SkeletonCircle, SkeletonText, Stack, Box } from '@chakra-ui/react'

export const Skeliton = () => {
  return (
    <div style={{ width: '100%', margin: 'auto', border: '2px solid gray', borderCollapse: 'collapse', marginTop:"20px" }}>
        <Box padding='6' boxShadow='lg' bg='white' mt="10px" id='Loading'>
      <Box>
       <SkeletonText mt='2' noOfLines={4} spacing='3' skeletonHeight='2' w="100%" />
      </Box>
      <Box>
       <SkeletonText mt='2' noOfLines={4} spacing='3' skeletonHeight='2' w="100%" />
      </Box>
      <Box>
       <SkeletonText mt='2' noOfLines={4} spacing='3' skeletonHeight='2' w="100%" />
      </Box>
      <Box>
       <SkeletonText mt='2' noOfLines={4} spacing='3' skeletonHeight='2' w="100%" />
      </Box>
      <Box>
       <SkeletonText mt='2' noOfLines={4} spacing='3' skeletonHeight='2' w="100%" />
      </Box>
     
    </Box>
    </div>
  )
}

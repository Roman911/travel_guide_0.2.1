import React from "react"
import { useMutation } from '@apollo/react-hooks'
import { useActions, useTypedSelector } from '../../../store/hooks'
import { useColors } from '../../../hooks'
import { LikesComponent } from '../Components'
import { LIKE_POST } from '../../../apollo/mutations/post'

type Props = {
  postId: string
  likes: string[]
}

export const Likes: React.FC<Props> = ({ postId, likes }) => {
  const { userData, refreshToken } = useTypedSelector(state => state.user)
  const { enqueueSnackbar } = useActions()
  const [setLikeForPost] = useMutation(LIKE_POST)
  const { icon, red } = useColors()
  const [like, setLike] = React.useState<string[]>([])

  React.useEffect(() => {
    setLike(likes)
  }, [likes])

  const handleClick = () => {
    if (userData) {
      setLikeForPost({
        variables: {
          input: {
            token: refreshToken,
            postId
          }
        }
      })
      if (like.includes(userData._id)) return setLike(like.filter(i => i !== userData._id))
      return setLike([...like, userData._id])
    }
    enqueueSnackbar({ message: 'Для виконання данної дії, необхідно увійти!', key: `${new Date().getTime()}+${Math.random()}` })
  }

  return <LikesComponent component={false} userId={userData?._id} colorRed={red} colorIcon={icon} likes={like} handleClick={handleClick} />
}
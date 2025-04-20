import { AlertCircle, Ban, CheckCircle, Clock, Lock } from 'lucide-react'

import { Badge } from '@/components/ui/badge'

type Props = {
  status: 'approved' | 'pending' | 'blocked' | 'banned'
}

export const UserBadge = ({ status }: Props) => {
  switch (status) {
    case 'approved':
      return (
        <Badge variant="outline" className=" text-green-700 border-green-700">
          <CheckCircle className="h-3 w-3 mr-1" />
          Aprovado
        </Badge>
      )
    case 'pending':
      return (
        <Badge variant="outline" className=" text-yellow-700 border-yellow-700">
          <Clock className="h-3 w-3 mr-1" />
          Pendente
        </Badge>
      )
    case 'blocked':
      return (
        <Badge variant="outline" className=" text-orange-700 border-orange-700">
          <Lock className="h-3 w-3 mr-1" />
          Bloqueado
        </Badge>
      )
    case 'banned':
      return (
        <Badge variant="outline" className=" text-red-700 border-red-700">
          <Ban className="h-3 w-3 mr-1" />
          Banido
        </Badge>
      )
    default:
      return (
        <Badge variant="outline" className=" text-gray-700 border-gray-700">
          <AlertCircle className="h-3 w-3 mr-1" />
          Desconhecido
        </Badge>
      )
  }
}

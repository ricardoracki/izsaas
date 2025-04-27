import {
  AlertCircle,
  Ban,
  CheckCircle,
  Clock,
  Lock,
  ShieldCheck,
} from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { UserStatus } from '@/database/generated'

type Props = {
  status: UserStatus
}

export const UserBadge = ({ status }: Props) => {
  switch (status) {
    case 'MEMBER':
      return (
        <Badge variant="outline" className=" text-green-700 border-green-700">
          <CheckCircle className="h-3 w-3 mr-1" />
          Membro
        </Badge>
      )
    case 'PENDING':
      return (
        <Badge variant="outline" className=" text-yellow-700 border-yellow-700">
          <Clock className="h-3 w-3 mr-1" />
          Pendente
        </Badge>
      )
    case 'BLOCKED':
      return (
        <Badge variant="outline" className=" text-orange-700 border-orange-700">
          <Lock className="h-3 w-3 mr-1" />
          Bloqueado
        </Badge>
      )
    case 'BANNED':
      return (
        <Badge variant="outline" className=" text-red-700 border-red-700">
          <Ban className="h-3 w-3 mr-1" />
          Banido
        </Badge>
      )
    case 'ADMIN':
      return (
        <Badge variant="outline" className=" text-purple-700 border-purple-700">
          <ShieldCheck className="h-3 w-3 mr-1" />
          Admin
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

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { mockCases } from "../mocks/cases"
import type { AMLCase } from "../types/case"

const fetchCases = async (): Promise<AMLCase[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(mockCases), 400)
  })
}

export const useCases = () => {
  return useQuery({
    queryKey: ["cases"],
    queryFn: fetchCases,
  })
}

type UpdatePayload = {
  id: string
  status: "approved" | "rejected"
}

export const useUpdateCase = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async ({ id, status }: UpdatePayload) => {
      return new Promise<UpdatePayload>((resolve) => {
        setTimeout(() => resolve({ id, status }), 300)
      })
    },

    onMutate: async (variables) => {
      await queryClient.cancelQueries({ queryKey: ["cases"] })

      const previous = queryClient.getQueryData<AMLCase[]>(["cases"])

      queryClient.setQueryData<AMLCase[]>(["cases"], (old) =>
        old?.map((c) =>
          c.id === variables.id ? { ...c, status: variables.status } : c
        )
      )

      return { previous }
    },

    onError: (_err, _vars, context) => {
      if (context?.previous) {
        queryClient.setQueryData(["cases"], context.previous)
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["cases"] })
    },
  })
}
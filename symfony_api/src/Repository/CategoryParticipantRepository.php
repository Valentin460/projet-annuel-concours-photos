<?php

namespace App\Repository;

use App\Entity\CategoryParticipant;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<CategoryParticipant>
 *
 * @method CategoryParticipant|null find($id, $lockMode = null, $lockVersion = null)
 * @method CategoryParticipant|null findOneBy(array $criteria, array $orderBy = null)
 * @method CategoryParticipant[]    findAll()
 * @method CategoryParticipant[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class CategoryParticipantRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, CategoryParticipant::class);
    }

    public function save(CategoryParticipant $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(CategoryParticipant $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return CategoryParticipant[] Returns an array of CategoryParticipant objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('c.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?CategoryParticipant
//    {
//        return $this->createQueryBuilder('c')
//            ->andWhere('c.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

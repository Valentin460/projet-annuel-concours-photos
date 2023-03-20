<?php

namespace App\Repository;

use App\Entity\MembrePhoto;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MembrePhoto>
 *
 * @method MembrePhoto|null find($id, $lockMode = null, $lockVersion = null)
 * @method MembrePhoto|null findOneBy(array $criteria, array $orderBy = null)
 * @method MembrePhoto[]    findAll()
 * @method MembrePhoto[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MembrePhotoRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MembrePhoto::class);
    }

    public function save(MembrePhoto $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MembrePhoto $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return MembrePhoto[] Returns an array of MembrePhoto objects
//     */
//    public function findByExampleField($value): array
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->orderBy('m.id', 'ASC')
//            ->setMaxResults(10)
//            ->getQuery()
//            ->getResult()
//        ;
//    }

//    public function findOneBySomeField($value): ?MembrePhoto
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

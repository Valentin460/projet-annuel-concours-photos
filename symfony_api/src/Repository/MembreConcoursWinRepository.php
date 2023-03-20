<?php

namespace App\Repository;

use App\Entity\MembreConcoursWin;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MembreConcoursWin>
 *
 * @method MembreConcoursWin|null find($id, $lockMode = null, $lockVersion = null)
 * @method MembreConcoursWin|null findOneBy(array $criteria, array $orderBy = null)
 * @method MembreConcoursWin[]    findAll()
 * @method MembreConcoursWin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MembreConcoursWinRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MembreConcoursWin::class);
    }

    public function save(MembreConcoursWin $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MembreConcoursWin $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return MembreConcoursWin[] Returns an array of MembreConcoursWin objects
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

//    public function findOneBySomeField($value): ?MembreConcoursWin
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}

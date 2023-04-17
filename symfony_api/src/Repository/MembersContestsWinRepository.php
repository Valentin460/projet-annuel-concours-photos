<?php

namespace App\Repository;

use App\Entity\MembersContestsWin;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Doctrine\Persistence\ManagerRegistry;

/**
 * @extends ServiceEntityRepository<MembersContestsWin>
 *
 * @method MembersContestsWin|null find($id, $lockMode = null, $lockVersion = null)
 * @method MembersContestsWin|null findOneBy(array $criteria, array $orderBy = null)
 * @method MembersContestsWin[]    findAll()
 * @method MembersContestsWin[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class MembersContestsWinRepository extends ServiceEntityRepository
{
    public function __construct(ManagerRegistry $registry)
    {
        parent::__construct($registry, MembersContestsWin::class);
    }

    public function save(MembersContestsWin $entity, bool $flush = false): void
    {
        $this->getEntityManager()->persist($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

    public function remove(MembersContestsWin $entity, bool $flush = false): void
    {
        $this->getEntityManager()->remove($entity);

        if ($flush) {
            $this->getEntityManager()->flush();
        }
    }

//    /**
//     * @return MembersContestsWin[] Returns an array of MembersContestsWin objects
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

//    public function findOneBySomeField($value): ?MembersContestsWin
//    {
//        return $this->createQueryBuilder('m')
//            ->andWhere('m.exampleField = :val')
//            ->setParameter('val', $value)
//            ->getQuery()
//            ->getOneOrNullResult()
//        ;
//    }
}
